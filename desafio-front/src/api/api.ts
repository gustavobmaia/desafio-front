import { CreateMessage, Register } from "../interfaces";

export class ApiService {
  private url: string;

  constructor() {
    this.url = "http://localhost:3000/dev/register";
  }

  async findAll(): Promise<Register[]> {
    const response = await fetch(this.url, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": this.url,
      },
    });

    const registers = await response.json();
    return registers.Items;
  }

  async create(register: Register): Promise<CreateMessage> {
    const response = await fetch(this.url, {
      method: "post",
      body: JSON.stringify(register),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const { message } = await response.json();
    return { message };
  }
}
