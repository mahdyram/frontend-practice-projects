import { useLocation } from "react-router-dom";
import { Card } from "antd";
const { Meta } = Card;

export default function Movie() {
  const { state } = useLocation();

  return (
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      <div style={{ width: "400px" }}>
        <h3>Overview</h3>
        <p className="hidden-scroll">{state.overview}</p>
      </div>
      <Card
        hoverable
        style={{ width: 300, margin: "30px 0" }}
        cover={
          <img
            alt={state.title}
            src={`https://image.tmdb.org/t/p/w500${state.poster_path}`}
          />
        }
      >
        <Meta title={state.title} description={state.vote_average.toFixed(1)} />
      </Card>
    </div>
  );
}
