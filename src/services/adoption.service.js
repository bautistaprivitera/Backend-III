let adoptions = [];

class AdoptionService {
  static async create(data) {
    if (!data.name || typeof data.name !== "string") {
      const error = new Error("Invalid data");
      error.status = 400;
      throw error;
    }

    const newAdoption = {
      id: Date.now().toString(),
      name: data.name,
      status: data.status || "pending"
    };

    adoptions.push(newAdoption);
    return newAdoption;
  }

  static async getAll() {
    return adoptions;
  }

  static async getById(id) {
    const adoption = adoptions.find((item) => item.id === id);

    if (!adoption) {
      const error = new Error("Adoption not found");
      error.status = 404;
      throw error;
    }

    return adoption;
  }

  static async update(id, data) {
    const index = adoptions.findIndex((item) => item.id === id);

    if (index === -1) {
      const error = new Error("Adoption not found");
      error.status = 404;
      throw error;
    }

    adoptions[index] = {
      ...adoptions[index],
      ...data
    };

    return adoptions[index];
  }

  static async delete(id) {
    const index = adoptions.findIndex((item) => item.id === id);

    if (index === -1) {
      const error = new Error("Adoption not found");
      error.status = 404;
      throw error;
    }

    const deleted = adoptions.splice(index, 1);
    return deleted[0];
  }

  static clearFakeData() {
    adoptions = [];
  }
}

export default AdoptionService;