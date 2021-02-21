#!/usr/bin/env groovy

pipeline {

    agent {
        docker {
            image 'node:14-alpine'
            args '-u root -p 3000:3000'
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
        stage('deploy') {
            steps {
                echo 'deploying now...'
                sh 'npm run start'
            }
        }
    }
}