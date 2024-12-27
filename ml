import torch
import pickle

def predict_groundwater(features):
    model = pickle.load(open('ml_model.pkl', 'rb'))
    prediction = model.predict([features])
    return prediction
