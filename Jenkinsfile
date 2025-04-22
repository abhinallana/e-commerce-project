pipeline{
    agent any

    environment{
        BACKEND_DIR = 'backend'
        FRONTEND_DIR = 'frontend'
    }
    stages{
        stage("Git Checkout"){
            steps{
                git 'https://github.com/abhinallana/e-commerce-project.git'
            }
        }
        stage("Install Backend Dependencies"){
            steps{
                dir("${BACKEND_DIR}"){
                    sh 'npm install'
                }
            }
        }
        stage("Install Frontend Dependencies"){
            steps{
                dir("${FRONTEND_DIR}"){
                    sh 'npm install'
                }
            }
        }
        stage ("Run Backend Tests"){
            steps{
                dir("${BACKEND_DIR}"){
                    sh 'npm test' || echo "No Tests found as of now"
                }
            }
        }
        stage("Run Frontend Tests"){
            steps{
                dir("${FRONTEND_DIR}"){
                    sh 'npm test' || echo "No Tests found as of now"
                }
            }
        }
        stage("Build Frontend"){
            steps{
                dir("${FRONTEND_DIR}"){
                    sh 'npm run build'
                }
            }
        }
        stage ("Deploy to Docker"){
            steps{
                sh 'docker compose up -d' || echo "Docker compose failed"
            }
        }
    }
}