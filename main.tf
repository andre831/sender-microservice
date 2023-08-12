provider "aws" {
  region = "us-east-2"
}

resource "aws_security_group" "sender-microservice-sg" {
  ingress {
    from_port = 0
    to_port   = 0
    protocol  = "-1"
    self      = true
  }

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_instance" "sender-microservice-instance" {
  ami           = "ami-02f3416038bdb17fb"
  instance_type = "t2.micro"
  count         = 1
  tags = {
    name = "sender-microservice"
    type = "main"
  }

  security_groups = ["${aws_security_group.sender-microservice-sg.name}"]
}
