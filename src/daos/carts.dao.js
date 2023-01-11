import { ContainerMongo } from "../containers/ContainerMongo.js";


import { userCollectionName, userSchema } from "../models/user.model.js";

class CartsDao extends ContainerMongo {
  constructor() {
    super(userCollectionName, userSchema);
  }
}

export default CartsDao;