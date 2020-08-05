type FormalizeData<T> = {
  status: number;
  data: T;
};

export const formalizeReturn = async <DataType>(response: Response): Promise<FormalizeData<DataType>> => ({
  status: response.status,
  data: response.status === 200 ? await response.json() : null,
});
