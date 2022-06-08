interface FnOutput {
  loading:boolean;
  error:string;
  payload:any | null;
}

type fetchFn = (url:string, fetch:any) => Promise<FnOutput>;

export const fetchHook:fetchFn = async (url,fetch) => {
  let loading = false;
  let error = "";
  let payload = null;

  try {
    loading = true;
    const response = await fetch(url);
    if (response.ok) {
      payload = await response.json();
    } else {
      error = "Error when fetching"
    }    
  } catch (error) {
    error = JSON.stringify(error);
  } finally {
    loading = false;
  }
  
  return {
    loading,
    error,
    payload
  }
}