import { useEffect, useState } from "react";

export const useFetch = () => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [data, setData] = useState(null);

	const getBalance = async () => {
		setLoading(true);
		try {
			const url = "/balance";
			const res = await fetch(url);
			if (res.status === 200) {
				const response = await res.json();
				console.log(response.data);
				setData(response.data);
			} else {
				setError(true);
			}
		} catch (error) {
			setError(true);
		}
		setLoading(false);
	};

	useEffect(() => {
		getBalance();
	}, []);

	return { loading, data, error };
};
