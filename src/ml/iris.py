import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.preprocessing import LabelEncoder

data = pd.read_csv("data.csv")

# Remove whitespaces from column names
data.columns = data.columns.str.strip()

# Remove whitespaces from values
data = data.applymap(lambda x: x.strip() if isinstance(x, str) else x)

df = pd.DataFrame(data)

df.info()

all_symptoms = df['Symptom1'].tolist() + df['Symptom2'].tolist() + df['Symptom3'].tolist()

# Creating a set of unique symptoms
unique_symptoms = set(all_symptoms)

# Creating a dictionary to map unique symptoms to unique IDs
symptom_to_id = {symptom: i+1 for i, symptom in enumerate(unique_symptoms)}

# Mapping symptom columns to unique IDs
for col in ['Symptom1', 'Symptom2', 'Symptom3']:
    df[col] = df[col].map(symptom_to_id)

# Display the DataFrame with unique IDs for symptoms
print(df)

medicine_to_int = {medicine: i for i, medicine in enumerate(data['Medicine'].unique())}

# Map the 'Medicine' column to integers using the dictionary
df['Medicine'] = data['Medicine'].map(medicine_to_int)

X = df.drop(columns=['Medicine'])
y = df['Medicine']


from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Training the Random Forest classifier
rf_classifier = RandomForestClassifier(random_state=42)
rf_classifier.fit(X_train, y_train)

# Making predictions
train_predictions = rf_classifier.predict(X_train)
test_predictions = rf_classifier.predict(X_test)

# Evaluating the model
train_accuracy = accuracy_score(y_train, train_predictions)
test_accuracy = accuracy_score(y_test, test_predictions)
print("Train Accuracy:", train_accuracy)
print("Test Accuracy:", test_accuracy)

import pickle
pickle.dump(rf_classifier ,open('iris.pkl', 'wb'))

# Create a DataFrame for prediction and map symptom names to their corresponding IDs
prediction_input = pd.DataFrame([
    ['Headache', 'Fever', 'Cough']
], columns=['Symptom1', 'Symptom2', 'Symptom3']).applymap(lambda x: symptom_to_id.get(x, None))

# Making predictions
predictions = rf_classifier.predict(prediction_input)

for i in medicine_to_int:
  if medicine_to_int[i] == predictions[0]:
    ans = i
    break
print("Predicted Medicine:", i)