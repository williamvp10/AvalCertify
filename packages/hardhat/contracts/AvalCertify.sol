// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";


contract AvalCertify is ERC721, ERC721URIStorage, AccessControl {
    struct Collection {
        uint256 collectionId;
        string name;
        address signer;
        uint256[] certificationIds;
    }

    struct Signature {
        uint256 collectionId;
        uint256 certification_Id;
        address signer;
        bytes signature;
    }

    struct Certification {
        uint256 certificationId; //id_NFT
        uint256 collectionId;
        uint256 requiredSignatures;
        uint256 currentSignatures;
        Signature[] signatures;
    }

    mapping(uint256 => Collection) internal collections;
    mapping(address => uint256[]) internal issuersCollections;
    mapping(uint256 => Certification) internal certifications; // {"id_NFT": Certification}
    mapping(uint256 => uint256) public tokenToCollection;

    uint256 public nextCollectionId;
    uint256 public nextCertificationId;


    bytes32 public constant ISSUER_ROLE = keccak256("ISSUER_ROLE");

    event CollectionCreated(uint256 indexed collectionId, string name, address indexed issuer);
    event SignerAdded(uint256 indexed collectionId, uint256 indexed certificationId, address indexed signer);
    event CertificateMinted(uint256 indexed tokenId, uint256 indexed collectionId, address indexed to);
    event SignatureAdded(uint256 indexed collectionId, uint256 indexed certificationId, address indexed signer, bytes signature);

    uint256 private _nextTokenId;

    constructor(address _owner)
        ERC721("AvalCertify", "ACT")
     {
        _grantRole(DEFAULT_ADMIN_ROLE, _owner);
    }

    function safeMint(address to, string memory uri) private returns(uint256) {
        uint256 tokenId = _nextTokenId++;
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
        return tokenId;
    }

    // The following functions are overrides required by Solidity.

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721URIStorage, AccessControl)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }

    function addIssuer(address issuer) external onlyRole(DEFAULT_ADMIN_ROLE) {
        grantRole(ISSUER_ROLE, issuer);
    }

    function removeIssuer(address issuer) external onlyRole(DEFAULT_ADMIN_ROLE) {
        revokeRole(ISSUER_ROLE, issuer);
    }

    function createCollection(string memory name, address signer) external onlyRole(ISSUER_ROLE) {
        uint256 collectionId = nextCollectionId++;
        uint256[] memory emptyArray;
        collections[collectionId] = Collection({
            collectionId: collectionId,
            name: name,
            signer: signer,
            certificationIds: emptyArray  // Inicializar array vacío correctamente
        });

        issuersCollections[signer].push(collectionId);

        emit CollectionCreated(collectionId, name, signer);
    }

    function mintCertificate(address to, string memory uri, uint256 collectionId) external onlyRole(ISSUER_ROLE){
        uint256 _tokenId = safeMint(to, uri);
        Certification storage newCertification = certifications[_tokenId];
        newCertification.certificationId = _tokenId;
        newCertification.collectionId = collectionId;
        newCertification.requiredSignatures = 1;
        newCertification.currentSignatures = 0;
        
        collections[collectionId].certificationIds.push(_tokenId);
        tokenToCollection[_tokenId] = collectionId;

        emit CertificateMinted(_tokenId, collectionId, to);
    }

    function addSignature(uint256 certificationId, bytes calldata signature) external {
        uint256 collectionId = tokenToCollection[certificationId];
        require(collections[collectionId].signer == msg.sender, "Only the asign signer can add signatures");

        Signature memory newSignature = Signature({
            collectionId: collectionId,
            certification_Id: certificationId,
            signer: msg.sender,
            signature: signature
        });

        certifications[certificationId].signatures.push(newSignature);
        certifications[certificationId].currentSignatures++;

        emit SignatureAdded(collectionId, certificationId, msg.sender, signature);
    }

    function getSignatures(uint256 certificationId) external view returns (Signature[] memory) {
        return certifications[certificationId].signatures;
    }

    function getCollection(uint256 collectionId) external view returns (Collection memory) {
        return collections[collectionId];
    }

    function getCertificationIds(uint256 collectionId) external view returns (uint256[] memory) {
        return collections[collectionId].certificationIds;
    }

    function getCertificationsPendingSignatures() external view returns (uint256[] memory) {
        uint256 count = 0;

        // First count the number of certifications pending signatures
        for (uint256 i = 0; i < nextCertificationId; i++) {
            if (certifications[i].currentSignatures < certifications[i].requiredSignatures) {
                count++;
            }
        }

        // Create an array to hold the IDs of certifications pending signatures
        uint256[] memory pendingCertifications = new uint256[](count);
        uint256 index = 0;

        // Populate the array with the IDs of pending certifications
        for (uint256 i = 0; i < nextCertificationId; i++) {
            if (certifications[i].currentSignatures < certifications[i].requiredSignatures) {
                pendingCertifications[index++] = i;
            }
        }

        return pendingCertifications;
    }

	//funtion to return ids of NFT from a especific owner
	function getNFTsByOwner(address owner) external view returns (uint256[] memory) {
		uint256 count = 0;
		for (uint256 i = 0; i < _nextTokenId; i++) {
			if (ownerOf(i) == owner) {
				count++;
			}
		}
		uint256[] memory nfts = new uint256[](count);
		uint256 index = 0;
		for (uint256 i = 0; i < _nextTokenId; i++) {
			if (ownerOf(i) == owner) {
				nfts[index++] = i;
			}
		}
		return nfts;
	}

	function getCertification(uint256 certificationId) external view returns (Certification memory) {
		return certifications[certificationId];
	}

	function getCertificationId(uint256 tokenId) external view returns (uint256) {
		return tokenToCollection[tokenId];
	}

	function getCertificationIds() external view returns (uint256[] memory) {
		uint256[] memory certificationIds = new uint256[](nextCertificationId);
		for (uint256 i = 0; i < nextCertificationId; i++) {
			certificationIds[i] = i;
		}
		return certificationIds;
	}

	function getIssuerCollections(address issuer) external view returns (uint256[] memory) {
		return issuersCollections[issuer];
	}

	function getIssuerCollections() external view returns (uint256[] memory) {
		return issuersCollections[msg.sender];
	}

	function getCertificationSigners(uint256 certificationId) external view returns (address[] memory) {
		Signature[] memory signatures = certifications[certificationId].signatures;
		address[] memory signers = new address[](signatures.length);
		for (uint256 i = 0; i < signatures.length; i++) {
			signers[i] = signatures[i].signer;
		}
		return signers;
	}

	function getCertificationSignatures(uint256 certificationId) external view returns (Signature[] memory) {
		return certifications[certificationId].signatures;
	}

	function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }
}
