const express = require('express')
const router = express.Router()
const attackController = require('../controllers/attack')
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', attackController.getTime)
router.post('/create-attack-time', attackController.createAttackTime)
router.get('/attack-type', attackController.getType)
router.post('/create-attack-type', attackController.createAttackType)
router.get('/pain-level', attackController.getPainLevel)
router.post('/create-pain-level', attackController.createPainLevel)
router.get('/attack-location', attackController.getLocation)
router.post('/create-attack-location', attackController.createAttackLocation)
router.get('/symptoms', attackController.getSymptoms)
router.post('/create-symptoms', attackController.createSymptoms)
router.get('/triggers', attackController.getTriggers)
router.post('/create-triggers', attackController.createTriggers)
router.get('/aura', attackController.getAura)
router.post('/create-aura', attackController.createAura)
router.get('/medication', attackController.getMedication)
router.post('/create-medication', attackController.createMedication)
router.get('/relief', attackController.getRelief)
router.post('/create-relief', attackController.createRelief)
router.get('/activities', attackController.getActivities)
router.post('/create-activities', attackController.createActivities)
router.get('/pain-location', attackController.getPainLocation)
router.post('/create-pain-location', attackController.createPainLocation)
router.get('/summary', attackController.getSummary)

module.exports = router