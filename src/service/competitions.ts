import api from ".";

interface Params {
  areas?: number[];
  plan?: string;
}

export const fetchCompetition = async (id: number) =>
  await api.get(`/competitions/${id}`);

export const fetchCompetitions = async (params?: Params) =>
  await api.get("/competitions/", params as any);
