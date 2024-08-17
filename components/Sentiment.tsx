import { useState, useEffect } from "react";
import { View, Text } from "react-native";
// import { pipeline } from '@fugood/transformers';
// import { pipeline, AutoModel, AutoTokenizer, env } from "@xenova/transformers";
// import { writeAndReadFile } from 'my-rnfs-module';
import * as ort from 'onnxruntime-react-native';

const Sentiment = () => {
  const [res, setRes] = useState(null);

  // useEffect(() => {
  //     writeAndReadFile();
  //   }, []);

  useEffect(() => {
    const sentAnal = async () => {
      // let pipe = await pipeline('sentiment-analysis');
      // let out = await pipe('I love transformers!');
      // setRes(out["label"])
    //   env.localModelPath = "../";

    //   // Disable the loading of remote models from the Hugging Face Hub:
    //   env.allowLocalModels = true;
    //   env.allowRemoteModels = false;

    //   const model_name_or_path =
    //     "distilbert-base-uncased-finetuned-sst-2-english";

    //   const model = await AutoModel.from_pretrained(model_name_or_path);
    //   const tokenizer = await AutoTokenizer.from_pretrained(model_name_or_path);

    const session = await ort.InferenceSession.create('../distilbert-base-uncased-finetuned-sst-2-english/onnx/model_quantized.onnx');

    };
    sentAnal();
  }, []);

  return (
    <View>
      {res ? (
        <Text style={{ color: "white" }}>{res}</Text>
      ) : (
        <Text style={{ color: "white" }}>NasdasdasddaA</Text>
      )}
    </View>
  );
};

export default Sentiment;
