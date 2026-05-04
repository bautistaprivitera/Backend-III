import AdoptionService from "../services/adoption.service.js";

class AdoptionController {
  static async create(req, res) {
    try {
      const adoption = await AdoptionService.create(req.body);
      res.status(201).json(adoption);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getAll(req, res) {
    const data = await AdoptionService.getAll();
    res.json(data);
  }
}

export default AdoptionController;