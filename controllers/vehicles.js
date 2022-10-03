import { Vehicle } from '../models/vehicle.js'


function index(req, res) {
  Vehicle.find({})
  .then(vehicles => {
    res.render('vehicles/index', {
      vehicles,
      title: "Vehicle List"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}



export {
  index,

}