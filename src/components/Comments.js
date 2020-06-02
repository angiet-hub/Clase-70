// Crear un componente Comments que tome como prop comments un array de objetos, y renderice
//     un componente section
//     un componente h2, dentro de section que tenga como texto 'Comentarios'
//     por cada ítem de comments, generar un componente Comment con CommentUser y CommentContent dentro suyo

import React from "react";

import Comment from "./Comment";
import CommentUser from "./CommentUser";
import CommentContent from "./CommentContent";

const Comments = ({ comments }) => {
  return (
    <section>
      <h2>Comentarios</h2>
      {comments.map((comment) => (
        <Comment>
          <CommentUser>{comment.usuario}</CommentUser>
          <CommentContent>{comment.comentario}</CommentContent>
        </Comment>
      ))}
    </section>
  );
};

export default Comments;
