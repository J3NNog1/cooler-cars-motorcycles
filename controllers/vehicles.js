import { Vehicle } from '../models/vehicle.js'


function index(req, res) {
  Vehicle.find({})
  .then(vehicles => {
    res.render('vehicles/index', {
      vehicles,
      title: "Vehicle List",
    
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}

function create(req, res) {
  req.body.owner = req.user.profile._id
	req.body.fast = !!req.body.fast
  Vehicle.create(req.body)
  .then(vehicle => {
    res.redirect('/vehicles')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/vehicles')
  })
}

function show(req, res) {
  Vehicle.findById(req.params.id)
  .populate("owner")
  .then(vehicle => {
    res.render('vehicles/show', {
      vehicle,
      title: "🏎️ 🏍️ show"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/vehicles')
  })
}

function changeSpeed(req, res) {
  Vehicle.findById(req.params.id)
  .then(vehicle => {
    vehicle.fast = !vehicle.fast
    vehicle.save()
    .then(()=> {
      res.redirect(`/vehicles/${req.params.id}`)
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/vehicles')
  })
}

function edit(req, res) {
  Vehicle.findById(req.params.id)
  .then(vehicle => {
    res.render('vehicles/edit', {
      vehicle,
      title: "Edit 🏎️ 🏍️"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/vehicles')
  })
}
function update(req, res) {
  Vehicle.findById(req.params.id)
  .then(vehicle => {
    if (vehicle.owner.equals(req.user.profile._id)) {
      req.body.fast = !!req.body.fast
      vehicle.updateOne(req.body)
      .then(()=> {
        res.redirect(`/vehicles/${vehicle._id}`)
      })
    } else {
      throw new Error('🚫 Not authorized 🚫')
    }
  })
  .catch(err => {
    console.log(err)
    res.redirect(`/vehicles`)
  })
}

function deleteVehicle(req, res) {
  Vehicle.findById(req.params.id)
  .then(vehicle => {
    if (vehicle.owner.equals(req.user.profile._id)) {
      vehicle.delete()
      .then(() => {
        res.redirect('/vehicles')
      })
    } else {
      throw new Error ('🚫 Not authorized 🚫')
    }   
  })
  .catch(err => {
    console.log(err)
    res.redirect('/vehicles')
  })
}


function createReview(req, res) {
  
}



export {
  index,
  create,
  show,
  changeSpeed,
  edit,
  update,
  deleteVehicle as delete,
  createReview,
}