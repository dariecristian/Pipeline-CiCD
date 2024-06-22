pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/username/repository.git'
            }
        }
        stage('Build') {
            steps {
                sh 'docker-compose -f docker-compose.build.yml up --build'
            }
        }
        stage('Unit Tests') {
            steps {
                sh 'docker-compose -f docker-compose.test.yml run unit-tests'
            }
        }
        stage('Integration Tests') {
            steps {
                sh 'docker-compose -f docker-compose.test.yml run integration-tests'
            }
        }
        stage('Regression Tests') {
            steps {
                sh 'docker-compose -f docker-compose.test.yml run regression-tests'
            }
        }
        stage('Deploy to Kubernetes') {
            steps {
                sh 'kubectl apply -f k8s/'
            }
        }
    }

    post {
        always {
            junit 'reports/**/*.xml'
            cleanWs()
        }
    }
}
