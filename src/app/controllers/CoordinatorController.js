const Faculty = require('../models/Faculty');
const { mutipleMongooseToObjects, mongoseToObject } = require("../../util/mongoose");
const Magazine = require('../models/Magazine');
const Submission = require('../models/Submission');
const { getCachedViewLink } = require('../../config/firebase')
class CoordinatorController {
    async viewAllSubmissionWithFacultyId(req, res, next) {
        try {
            const facultyId = req.facultyId;
            const faculty = await Faculty.findById(facultyId);
            const magazines = await Magazine.find({ faculty: facultyId });
            const magazineIds = magazines.map(magazine => magazine._id);

            const submissions = await Submission.find({ magazine: { $in: magazineIds } })
            .populate('student').populate('magazine').sort({ dateSubmitted: -1 });;

            res.render('submission/viewForCoordinator', {
                facultyName: faculty.name,
                submissions: mutipleMongooseToObjects(submissions),
            });
        } catch (error) {
            next(error);
        }
    }
    //[GET] /coordinator/submission/:id/edit
    async editSubmissionForm(req, res, next) {
        const facultyId = req.facultyId;

        Submission.findById(req.params.id).populate('magazine')
            .then(async submission => {
                const viewImageLink = await getCachedViewLink(submission.imagePath);
                const viewDocLink = await getCachedViewLink(submission.documentPath);
                if (facultyId!=submission.magazine.faculty) {
                    return res.status(403).json({ message: "Access forbidden" });                }
                res.render('submission/editForCoordinator', {
                    submission: mongoseToObject(submission),
                    viewImageLink: viewImageLink,
                    viewDocLink: viewDocLink,
                })
            }
            )
            .catch(error => next(error));
    }
    //[POST] /coordinator/submission/:id/edit
    async editSubmission(req, res, next) {
        try {
            const { status, comment } = req.body;
            await Submission.updateOne({ _id: req.params.id }, { status, comment });
            res.redirect('../view');
        } catch (error) {
            next(error);
        }
    }

}

module.exports = new CoordinatorController();