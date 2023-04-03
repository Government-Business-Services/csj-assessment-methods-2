//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here
router.post("/check-handler", function (req, res) {



        if ((req.session.data['checkBeh'] == "true") || (req.session.data['checkExp'] == "true") || (req.session.data['checkTech'] == "true") || (req.session.data['checkStr'] == "true")) {
                res.redirect('check-criteria')
        } else {

        }
})
