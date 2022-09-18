export default{
    name:"subcategory",
    title:"Product sub category",
    type: "document",
    fields: [
        {name:"mainCategory", title:"Main Category", type:"mainCategoryRef"},
        {name:"subCategoryTitle", title:"Sub Category Title", type: "string"}
    ]
}