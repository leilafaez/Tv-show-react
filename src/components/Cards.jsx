import React,{useState,useEffect} from "react";
import Card from "./Card";


const Cards = ({ content, setContent, handleVisible }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoading = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    window.addEventListener("load", handleLoading);
    return () => window.removeEventListener("load", handleLoading);
  }, []);

  return !isLoading ? (
    <div className="root">
      {content.map((item) => {
        return (
          <Card
            key={item.id}
            item={item}
            setContent={setContent}
            handleVisible={handleVisible}
          />
        );
      })}
    </div>
  ) : (
    { isLoading } && <div className="loading" />
  );
};


export default Cards;