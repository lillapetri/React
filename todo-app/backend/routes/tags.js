var express = require("express");
const db = 'mongodb://localhost:27017/todo_v1';
var tagRoutes  = express.Router({mergeParams: true});
var Todo = require("../models/todo");
var Tag = require("../models/tag");

// tag EDIT ROUTE
tagRoutes.get("/:tag_id/edit", function(req, res){
    tag.findById(req.params.tag_id, function(err, foundtag){
       if(err){
           res.redirect("back");
       } else {
         res.render("tags/edit", {todo: req.params.id, tag: foundtag});
       }
    });
 });
 
 // tag UPDATE
 tagRoutes.put("/:tag_id", function(req, res){
    tag.findByIdAndUpdate(req.params.tag_id, req.body.tag, function(err, updatedtag){
       if(err){
           res.redirect("back");
       } else {
           res.redirect("/" + req.params.id );
       }
    });
 });
 
 // tag DESTROY ROUTE
 tagRoutes.delete("/:tag_id", function(req, res){
     //findByIdAndRemove
     tag.findByIdAndRemove(req.params.tag_id, function(err){
        if(err){
            res.redirect("back");
        } else {
            res.redirect("/" + req.params.id);
        }
     });
 });
 
 module.exports = tagRoutes;