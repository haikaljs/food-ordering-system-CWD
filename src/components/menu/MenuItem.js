export default function MenuItem() {
  return (
    <div className="bg-gray-200 p-4 rounded-lg text-center hover:bg-white transition-all hover:shadow-md hover:shadow-black/25">
      <div className="text-center">
        <img src="/pizza.png" alt="" className="max-h-auto max-h-24 mx-auto" />
      </div>

      <h4 className="font-semibold my-4 text-xl">Peperoni Pizza</h4>
      <p className="text-gray-500 text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, quo?
      </p>
      <button className="bg-primary text-white rounded-full px-6 py-2">
        Add to cart $12
      </button>
    </div>
  );
}
