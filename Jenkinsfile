
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
                sh 'pwd'
            }
        }
        stage('Test') {
            steps {
                retry(3) {
                    echo 'Testing...'
                }
                
            }
        }
        stage('Sanity check') {
            steps {
                echo 'using `input` to popup a question.'
                echo 'input `Does the staging environment look ok?`'
            }
        }
        stage('Deploy') {
            steps {
                echo 'deploying now...'
            }
        }

    }
    post {
        always {
            echo '当Pipeline完成执行后，您可能需要运行清理步骤或根据Pipeline的结果执行某些操作。可以在本post节中执行这些操作。'
            echo 'This will always run'

        }
        success {
            echo 'This will run only if successful'
        }
        failure {
            echo 'This will run only if failed'
        }
        unstable {
            echo 'This will run only if the run was marked as unstable'
        }
        changed {
            echo 'This will run only if the state of the Pipeline has changed'
            echo 'For example, if the Pipeline was previously failing but is now successful'
        }
    }
}