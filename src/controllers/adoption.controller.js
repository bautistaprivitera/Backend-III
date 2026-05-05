import AdoptionService from "../services/adoption.service.js";

class AdoptionController {
  static async create(req, res) {
    try {
      const adoption = await AdoptionService.create(req.body);
      res.status(201).json(adoption);
    } catch (error) {
      res.status(error.status || 500).json({ error: error.message });
    }
  }

  static async getAll(req, res) {
    try {
      const adoptions = await AdoptionService.getAll();
      res.status(200).json(adoptions);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getById(req, res) {
    try {
      const adoption = await AdoptionService.getById(req.params.id);
      res.status(200).json(adoption);
    } catch (error) {
      res.status(error.status || 500).json({ error: error.message });
    }
  }

  static async update(req, res) {
    try {
      const adoption = await AdoptionService.update(req.params.id, req.body);
      res.status(200).json(adoption);
    } catch (error) {
      res.status(error.status || 500).json({ error: error.message });
    }
  }

  static async delete(req, res) {
    try {
      const adoption = await AdoptionService.delete(req.params.id);
      res.status(200).json({
        message: "Adoption deleted successfully",
        adoption
      });
    } catch (error) {
      res.status(error.status || 500).json({ error: error.message });
    }
  }
}

export default AdoptionController;