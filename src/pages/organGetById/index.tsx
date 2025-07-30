import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type Organ = {
  _id: string;
  nameEn: string;
  nameRu: string;
  nameUz: string;
  descriptionEn: string;
  descriptionRu: string;
  descriptionUz: string;
  model: string;
};

const OrganGetById: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [organ, setOrgan] = useState<Organ | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const selectedLang = localStorage.getItem("i18nextLng") || "en";

  useEffect(() => {
    const fetchOrgan = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(
          `${process.env.REACT_APP_ROOT_API}/organs/${id}?lang=${selectedLang}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch organ");
        }
        const result = await response.json();
        setOrgan(result?.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchOrgan();
    }
  }, [id, selectedLang]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!organ) return <div>No organ found.</div>;

  return (
    <div className="">
      <div
        className="flex justify-center"
        dangerouslySetInnerHTML={{ __html: organ.model }}
      />
    </div>
  );
};

export default OrganGetById;
