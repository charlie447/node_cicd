#!/usr/bin/env groovy

pipeline {

    agent {
        docker {
            image 'node:14-alpine'
            args '-u root'
        }
    }

    stages {
        stage('Build') {
            steps {
                echo 'Building...'
                sh 'node --version'
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing...'
            }
        }
    }
}