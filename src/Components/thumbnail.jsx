export const Thumbnail = () => {
  return (
    <div className="container mx-auto">
      {/* color bg text border contomize*/}
      <div className="bg-gray-600 text-yellow-500 border-8 border-x-2 p-4 border-yellow-500 mb-4 ml-[150px]">
        <p>Hello Ali</p>
      </div>
      <div className="bg-primary text-secondary-200 lg:text-2xl sm:text-4 md:text-6xl font-extrabold">
        <p>Hello Ali</p>
      </div>
      <div className="border-8 text-green-500 text-md h-80 w-96 border-green-500 text-justify overflow-scroll">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea similique
          dolorem sed quidem minima accusamus enim eos, nostrum facere nobis
          porro blanditiis assumenda laborum? Quam voluptate incidunt ratione
          eos itaque eveniet nostrum deleniti saepe esse id placeat earum
          excepturi aliquam laudantium rerum eligendi cumque neque praesentium
          tenetur, expedita in quibusdam mollitia sequi. Aliquid soluta
          corrupti, omnis quo nam veritatis modi ducimus esse sequi ipsa illum
          quos eum quasi eveniet nulla! Quo, repudiandae deserunt? Repudiandae
          consectetur dicta suscipit accusantium sit? Ex tenetur possimus
          commodi, reiciendis facilis iure impedit dolorum fugiat voluptas hic
          maxime similique sequi dolorem eos aliquid nesciunt asperiores
          repudiandae ab accusantium quis, magnam corporis? Quae a facere, culpa
          dignissimos aliquid eligendi fugit? Molestias sunt alias eveniet,
          distinctio labore autem.
        </p>
      </div>
      <div className="whitespace-nowrap ">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea similique
          dolorem sed quidem minima accusamus enim eos, nostrum facere nobis
          porro blanditiis assumenda laborum? Quam voluptate incidunt ratione
          eos itaque eveniet nostrum de leniti saepe esse id placeat earum
          excepturi aliquam laudantium rerum eligendi cumque neque praesentium
          tenetur, expedita in quibusdam mollitia sequi. Aliquid soluta
          corrupti, omnis quo nam veritatis modi ducimus esse sequi ipsa illum
          quos eum quasi eveniet nulla! Quo, repudiandae deserunt? Repudiandae
          consectetur dicta suscipit accusantium sit? Ex tenetur possimus
          commodi, reiciendis facilis iure impedit dolorum fugiat voluptas hic
          maxime similique sequi dolorem eos aliquid nesciunt asperiores
          repudiandae ab accusantium quis, magnam corporis? Quae a facere, culpa
          dignissimos aliquid eligendi fugit? Molestias sunt alias eveniet,
          distinctio labore autem.
        </p>
      </div>
      <div className="flex space-x-4 ... bg-red-600 w-50 h-50 border-8 border-green-500">
        <div className="g-red-600 w-50 h-50"> 01</div>
        <div>02</div>
        <div>03</div>
      </div>
      <div class="flex flex-row-reverse space-x-4 space-x-reverse ...">
        <div>01</div>
        <div>02</div>
        <div>03</div>
      </div>
      <div className=" flex w-1/6 gap-2">
        <div className="bg-red-800 min-w-1/2">width1</div>
        <div className="bg-pink-500 min-w-1/2">width2</div>
      </div>
      <div className="flex max-w-3xl text-justify gap-5">
        <p className="min-w-lg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea similique
          dolorem sed quidem minima
        </p>
        <p className="min-w-2xs bg-red-300">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea similique
          dolorem sed quidem minima
        </p>
      </div>
      <div className="flex gap-2 flex-row-reverse">
        <div>flex 1</div>
        <div>flex 2</div>
      </div>
      <div className="flex gap-2 flex-col">
        <div>flex 1</div>
        <div>flex 2</div>
      </div>
      <div class="flex">
        <div class="flex-auto bg-blue-500 p-4">Flexible Box</div>
        <div class="w-40 bg-red-500 p-4">Fixed Box</div>
      </div>
      <div class="flex flex-row">
        <div class="basis-2/12">01</div>
        <div class="basis-4/12">02</div>
        <div class="basis-1/12">01</div>
        <div class="basis-5/12">02</div>
      </div>
      <div class="flex ...">
        <div class="size-14 grow ...">01</div>
        <div class="size-14 grow-0 ...">02</div>
        <div class="size-14 grow ...">03</div>
      </div>
      <div className="flex gap-2 justify-center">
        <div className=" flex w-20 h-20 bg-red-400 justify-center items-center ">
          box1
        </div>
        <div className=" flex w-20 h-20 bg-red-400 justify-center items-center ">
          {" "}
          box1
        </div>
        <div className=" flex w-20 h-20 bg-red-400 justify-center items-center ">
          box1
        </div>
      </div>
      <div class="flex items-center justify-center w-40 h-40 bg-blue-500 text-white">
        Centered Text
      </div>
      <div className="grid grid-cols-4  rounded-lg gap-2 mt-4 ">
        <div className="bg-green-600 rounded-lg text-center">column</div>
        <div className="bg-green-600 rounded-lg text-center">column</div>
        <div className="bg-green-600 rounded-lg text-center">column</div>
        <div className="bg-green-600 rounded-lg text-center">column</div>
        <div className="bg-green-600 rounded-lg col-span-2 text-center">
          column
        </div>
        <div className="bg-green-600 rounded-lg text-center">column</div>
        <div className="bg-green-600 rounded-lg text-center">column</div>
      </div>
      <div>
        <span class="inline bg-blue-500 text-white">Inline Span</span>
        <span class="inline bg-red-500 text-white">Next to it</span>
      </div>
      <div className="w-1/4">
        <span class="block bg-blue-500 text-white">Block Span</span>
        <span class="block bg-red-500 text-white">Next Line</span>
      </div>
      <div className="flex gap-2 mt-3 text-white text-center justify-center items-center">
        <span class="inline-block w-32 h-12 bg-blue-500 text-white text-center">
          Inline-Block
        </span>
        <span class=" w-32 h-48 bg-red-500 flex text-white text-center justify-center items-center">
          Next to it
        </span>
      </div>
      <div>
        <img
          className="float-none"
          src="data:image/jpeg;base64,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"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          neque ullam delectus id, accusantium perspiciatis quae officia, rem
          harum amet animi laudantium ratione, provident enim laboriosam commodi
          dolores? Optio, quod?
        </p>
      </div>
      <div class="static bg-blue-500 text-white p-4">
        I am static (default positioning)
      </div>
      {/* <div class="fixed top-0 left-0 w-full bg-red-500 text-white p-4">
        I am fixed (always visible)
      </div> */}
      <div className="bg-green-500 w-48 h-48 rounded-lg mt-5 relative">
        <div className="bg-black w-32 h-32 rounded-md absolute bottom-0 right-0"></div>
      </div>
      <div>
        <button className="bg-cyan-500 shadow-2xl shadow-cyan-500 ... mt-5 p-2 rounded-lg text-xl">
          Subscribe
        </button>
      </div>
      <div>
        <button class="bg-indigo-500 shadow-lg shadow-indigo-500 ... t-5 p-2 rounded-lg text-xl my-2 mx-2">
          Subscribe
        </button>
      </div>
      <button class="bg-blue-500 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 rounded-lg p-2 my-5 text-xl">
        Save Changes
      </button>
      <button className="rounded-lg p-2 my-5 text-xl bg-red-600 mx-5 transition duration-700  hover:-translate hover:scale-110">
        save change
      </button>
      <button className="transition duration-700 ease-in-out ... rounded-lg p-2 my-5 text-xl bg-red-600">
        Button C
      </button>
    </div>
  );
};
