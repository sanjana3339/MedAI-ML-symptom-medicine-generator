from flask import Flask, render_template, request,jsonify
import pickle
import numpy as np
from flask_cors import CORS, cross_origin

model = pickle.load(open('iris.pkl', 'rb'))

app = Flask(__name__)
CORS(app, supports_credentials=True)

symptoms = {
    'Difficulty breathing': 1,
    'Headache': 2,
    'Dehydration': 3,
    'Pressure in sinuses': 4,
    'Dry cough': 5,
    'Indigestion': 6,
    'Chills': 7,
    'Stuffy nose': 8,
    'Nasal congestion': 9,
    'Stomach ache': 10,
    'Diarrhea': 11,
    'Ear pain': 12,
    'Sneezing': 13,
    'Muscle pain': 14,
    'Numbness': 15,
    'Hearing loss': 16,
    'Abdominal pain': 17,
    'Back pain': 18,
    'Fatigue': 19,
    'Bloating': 20,
    'Chest pain': 21,
    'Muscle cramps': 22,
    'Ear discharge': 23,
    'Runny nose': 24,
    'Stiffness': 25,
    'Hives': 26,
    'Sour taste in mouth': 27,
    'Dizziness': 28,
    'Loss of appetite': 29,
    'Itchy rash': 30,
    'Cough': 31,
    'Joint pain': 32,
    'Vomiting': 33,
    'Frequent urination': 34,
    'Swelling': 35,
    'Fever': 36,
    'Pale skin': 37,
    'Rash': 38,
    'Nausea': 39,
    'Congestion': 40,
    'Regurgitation': 41,
    'Painful urination': 42,
    'Weakness': 43,
    'Sore throat': 44,
    'Chest tightness': 45,
    'Tremors': 46,
    'Shortness of breath': 47,
    'Jaundice': 48,
    'Warmth': 49,
    'Heartburn': 50,
    'Sensitivity to light': 51,
    'Wheezing': 52,
    'Swollen glands': 53,
    'Skin rash': 54,
    'Muscle stiffness': 55,
    'Redness': 56,
    'Gas': 57,
    'Body ache': 58,
    'Itching': 59,
    'Tingling sensation': 60
}

medications = {
    0: 'Aspirin',
    1: 'Ibuprofen',
    2: 'Antihistamine',
    3: 'Paracetamol',
    4: 'Acetaminophen',
    5: 'Cough syrup',
    6: 'Imodium',
    7: 'Analgesic cream',
    8: 'Nitroglycerin',
    9: 'Anti-inflammatory',
    10: 'Antiemetic',
    11: 'Electrolyte solution',
    12: 'Inhaler',
    13: 'Antacids',
    14: 'Iron supplement',
    15: 'Nasal spray',
    16: 'Acid reducer',
    17: 'Bronchodilator',
    18: 'Pain reliever',
    19: 'NSAIDs',
    20: 'Liver tonic',
    21: 'Antibiotics',
    22: 'Migraine medication',
    23: 'Antiviral',
    24: 'Antacid',
    25: 'Muscle relaxant',
    26: 'Oxygen therapy'
}

@app.route('/suggest', methods=['POST'])
@cross_origin(supports_credentials=True)
def predict():
    data = request.json
    data1 = symptoms.get(data['symptom1'])
    data2 = symptoms.get(data['symptom2'])
    data3 = symptoms.get(data['symptom3'])
    arr = np.array([[data1, data2, data3]])
    pred = model.predict(arr)
    return jsonify({"suggestion": medications[pred[0]+1]})

if __name__ == "__main__":
    app.run(debug=True,port=5000)