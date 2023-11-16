function NoImagesFallback() {
 return (
  <div className="flex flex-col items-center">
   <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
    No images found...
   </h1>
   <p className="mt-6 text-base leading-7 text-gray-600">
    Sorry, we couldn’t find images to match your search. Please try again.
   </p>
  </div>
 );
}

export default NoImagesFallback;
