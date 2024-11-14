const CategoryNameModel = require("../models/CategoryNameModel");

class CategoryNameController{
    static async add(req,res){
        const catName=req.body.catName;
        const catDescription=req.body.catDescription;
        const catSlug=req.body.catSlug;
        const code=req.body.code;
        const selectedItem=req.body.selectedItem;
        const selectedAttribute=req.body.selectedAttribute;
        const catImage=req.body.catImage;
        const catIcon=req.body.catIcon;
        const catBanner=req.body.catBanner;
        const created_date=req.body.created_date || new Date().getTime();
        res.send(catName)
        console.log(catName)
        let results=await CategoryNameModel.add(
            catName,
            catDescription,
            catSlug,
            code,
            selectedItem,
            selectedAttribute,
            catImage,
            catIcon,
            catBanner,
            created_date
        )
        if(results){
            res.status(201).send(results);
        }
        
    }
}
module.exports=CategoryNameController;