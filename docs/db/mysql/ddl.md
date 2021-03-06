# Data Definition Language
SQL 语言按照功能可以划分为四类：
- 数据定义语言 DDL：`create database/table/index/view`
- 数据查询语言 DQL：`select`
- 数据操纵语言 DML：`insert, update, delete,`
- 数据控制语言 DCL：`grant`

本文主要针对数据定义语言（DDL），从书写规范、数据类型等角度展开介绍

## DDL 书写规范
先看一个简单的示例
``` sql
CREATE DATABASE IF NOT EXISTS `db_jwt`;
USE `db_jwt`;

DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id`          INT(11)      NOT NULL AUTO_INCREMENT COMMENT 'id',
  `username`    VARCHAR(255) NOT NULL COMMENT '用户名',
  `password`    VARCHAR(255) NOT NULL COMMENT '加密后的密码',
  `create_time` TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE = InnoDB CHARSET = utf8;
```
考虑到代码的可读性和设计的完整性，建议在创建表时遵守如下规约：
- 

## 数据类型
tinyint smallint int bigint
int(11)
char varchar
datatime timestamp

## 字符集
utf8 utf8mb4

