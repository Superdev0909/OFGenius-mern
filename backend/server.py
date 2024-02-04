import requests
from flask import Flask, request

app = Flask(__name__)

@app.route('/data', methods = ['POST'])
def pic_generator():
  prompt = request.json["prompt"]
  n_prompt = request.json["n_prompt"]
  print(prompt)
  url = "https://api.runpod.ai/v2/sdxl/runsync"

  payload = { "input": {
      "prompt": prompt,
      "negative_prompt": n_prompt,
      "num_inference_steps": 25,
      "refiner_inference_steps": 50,
      "width": 1024,
      "height": 1024,
      "guidance_scale": 7.5,
      "strength": 0.3,
      "seed": None,
      "num_images": 1
    } }
  headers = {
      "accept": "application/json",
      "content-type": "application/json",
      "authorization": "JB5HH29UBG5ZZTOO6CWJEZHAS3WPA2MI68Z0KU5L"
  }

  response = requests.post(url, json=payload, headers=headers)
  return response.text
  

if __name__ == '__main__':
  print("kkk")
  app.run()
