module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      FirstName : String,
      MiddleName : String,
      LastName: String,
      Address: String,
      PinCode: String,
      City: String,
      Email_Id: String,
      Phone_No: String
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const User = mongoose.model("tbl_user", schema);
  return User;
};
