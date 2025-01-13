// export default function Items({params} : {params : {itemId : string}}) {
//   return (
//     <>
//       <h1>More info on item with id : {params.itemId}</h1>
//     </>
//   );
// }


export default async function Items({params} : {params: Promise<{slug: string}>}){
  const itemId = (await params).slug;
  console.log(params);
  return (
    <>
      <h1>More info on item with id : {itemId}</h1>
    </>
  )
}
