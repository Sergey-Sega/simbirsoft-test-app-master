import api from ".";

interface Params {
  season?: number[];
  stage?: string;
}

export const fetchTeams = async (id: number) =>
  await api.get(`/competitions/${id}/teams`);
