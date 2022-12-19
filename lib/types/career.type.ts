export type Career = {
  id: string;
  name: string;
};

export type Course = {
  id: string;
  name: string;
  semester: number;
  predecessors: string[];
  successors: string[];
  isHover: boolean;
  isPredecessor: boolean;
  isSuccessor: boolean;
};
