import { useEffect, useState } from "react";
import axios from "axios";
import { URL_BASE } from "../config";

export const useGetAxios = (url) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        

    })
}
