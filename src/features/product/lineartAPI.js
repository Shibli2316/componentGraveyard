// A mock function to mimic making an async request for data
export function fetchAllLinearts() {
    return new Promise( async (resolve) => {
        const response = await fetch('http://localhost:8000/linearts');
        const data = await response.json();
        resolve({data});
      }
    );
  }