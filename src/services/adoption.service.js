let adoptions = [];

class AdoptionService {
  static async create(data) {
    if (!data.name) throw new Error("Invalid data");

    const newAdoption = { id: Date.now(), ...data };
    adoptions.push(newAdoption);
    return newAdoption;
  }

  static async getAll() {
    return adoptions;
  }
}

export default AdoptionService;