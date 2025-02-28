import React, { useState } from "react";
import { InferenceContext, InferenceResult, PhotoCollector } from "landingai-react";

const apiInfo = {
  endpoint: "https://predict.app.landing.ai/inference/v1/predict?endpoint_id=829b719d-72ff-41cd-8a64-c3695e60bb71",
  key: "land_sk_ybG6jByYtLjuXYU2sDt3d3CXQD0FWtfsUH3tiVc1bwJk68uEvZ",  // Replace this with your actual API key from Landing AI
};

export default function App() {
  const [image, setImage] = useState();

  return (
    <InferenceContext.Provider value={apiInfo}>
      <h1>Facial Expression Recognition</h1>
      <PhotoCollector setImage={setImage} />
      <InferenceResult image={image} />
    </InferenceContext.Provider>
  );
}
