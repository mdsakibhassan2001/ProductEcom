const DB = require("../config/btb24config");
class CategoryNameModel {
  static table_name = "category_name";
  static primary_id = "id";

  static async getAll() {
    return new Promise((resolve, reject) => {
      DB.query(`SELECT * FROM ${this.table_name}`, [], (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }

  //   static async add(
  //     catName,
  //     catDescription,
  //     catSlug,
  //     code,
  //     selectedItem,
  //     selectedAttribute,
  //     catImage,
  //     catIcon,
  //     catBanner,
  //     created_date
  //   ) {}
}
module.exports = CategoryNameModel;
