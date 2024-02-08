#!/bin/zsh

# Check if python is installed
if ! command -v python3 &> /dev/null
then
    echo "Python is not installed. Installing Python..."
    brew install python3
else
    echo "Python is already installed."
fi

# Check if pip is installed
if ! command -v pip3 &> /dev/null
then
    echo "pip is not installed. Installing pip..."
    curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py
    python3 get-pip.py
else
    echo "pip is already installed."
fi

# Check if virtualenv is installed
if ! pip3 show virtualenv &> /dev/null
then
    echo "virtualenv is not installed. Installing virtualenv..."
    pip3 install virtualenv
else
    echo "virtualenv is already installed."
fi

# Create a virtual environment
if [ ! -d "envs" ]
then
    echo "Creating a virtual environment..."
    python3 -m venv envs
else
    echo "Virtual environment already exists."
fi

# Activate the virtual environment
source envs/bin/activate

# Install the requirements
if [ -f "backend/requirements.txt" ]
then
    echo "Installing requirements..."
    pip3 install -r backend/requirements.txt
else
    echo "requirements.txt does not exist."
fi

# Check if psycopg2-binary is installed
if ! pip3 show psycopg2-binary &> /dev/null
then
    echo "psycopg2-binary is not installed. Installing psycopg2-binary..."
    pip3 install psycopg2-binary
else
    echo "psycopg2-binary is already installed."
fi

source envs/bin/activate

python3 backend/manage.py runserver