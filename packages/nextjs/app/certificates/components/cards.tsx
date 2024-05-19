export function Cards() {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="flex items-center mx-5">
        <img
          className="w-10 h-10 rounded-full mr-4"
          src="https://media.discordapp.net/attachments/901115824302080124/1164266023831220354/Referencia_Videojuego_1.jpg?ex=664aeafb&is=6649997b&hm=18ad772d93144f071442bacb450e41e80ab2dcbe960b59ffb3f1b28174bc4499&=&format=webp&width=506&height=671"
          alt="Avatar of Jonathan Reinink"
        />
        <div className="text-md">
          <p className="text-900 leading-none">Jonathan Reinink</p>
          <p className="text-600">Aug 18</p>
        </div>
      </div>

      <div className="w-4/5 mx-auto h-60 overflow-hidden rounded-lg">
        <img
          className="w-full h-full object-cover"
          src="https://media.discordapp.net/attachments/901115824302080124/1205699409287979059/Default_Create_a_breathtakingly_realistic_and_epic_depiction_o_1.jpg?ex=664ab313&is=66496193&hm=549bc20f0a98962924a0aa4960de98e2535b51b96fe7fcebed59926172fc9db1&=&format=webp"
          alt="Sunset in the mountains"
        />
      </div>

      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
        <p className="text-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis
          eaque, exercitationem praesentium nihil.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #photography
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #travel
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #winter
        </span>
      </div>
    </div>
  );
}
