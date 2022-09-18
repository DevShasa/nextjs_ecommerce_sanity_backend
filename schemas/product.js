export default{
    name: "product",
    title: 'Product',
    type:"document", 
    fields:[
        {name:"image", title: "image", type:'array', of:[{type:"image"}], options:{hotspot:true}},
        {name:"name", title:"Product Name", type:"string", validation: (Rule) => Rule.required()},
        {name:"price", title:"Price", type:"number", validation: (Rule) => Rule.required()},
        {name:"details", title:"Details", type:"string", validation: (Rule) => Rule.required()},
        //category
        { name:"category", title:"Category", type:"mainCategoryRef" },
        {name: "slug", title:"Slug (Do not leave empty, use generate to generate new)", type:"slug", options:{
            source:doc => `${doc.name.slice(0,100)} ${doc.details.slice(0,50)} ${String(Math.floor(Math.random() * 9999))} ${doc._id.split('-').slice(-1)}`, 
            maxLength:90,
            slugify: input => input.toLowerCase().replace(/\s+/g, '-').replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, "").slice(0, 200),
            },
            validation: (Rule) => Rule.required(),
        },
        //brand
        {name:"brand", title:"Brand", type:"brandReference"},
        //subcategory
        {name:"subCategory", title:"Sub Category", type:"subCategoryReference"}
    ]
}