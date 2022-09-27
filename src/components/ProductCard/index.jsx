function ProductCard({product}) {
    return (
        <div className="relative group w-full border-1 rounded-sm bg-white rounded-[8px]">
            <div className="w-full flex items-center justify-center">
                <img src={product.images[0] || defaultImage} alt={product.name}/>
            </div>
            <div className="p-3">
                <p className="text-base font-medium text-gray">{product.name}</p>
                <p className="">{product.description}</p>
                <p className="">{product.price}</p>
            </div>
        </div>
    );
}

const defaultImage = 'https://i5.walmartimages.com/asr/0ee198a5-e8f2-4d92-9cc7-ce610dc2eb2e.eee8074ec77e7af0c9e2e2072b680d3a.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF';

export default ProductCard;