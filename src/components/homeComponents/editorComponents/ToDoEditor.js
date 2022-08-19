import React from "react";
import { FaPlus } from "react-icons/fa";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { MdDone } from "react-icons/md";

export default function ToDoEditor() {
  return (
    <div className="tasks-container">
      <div className="create-task">
        <input type="text" placeholder="Enter your task..." />
        <button>
          <FaPlus />
        </button>
      </div>
      <div className="tasks">
        <div className="task">
          <div class="check">
            <span class="tick"></span>
          </div>
          <div class="btns">
            <button id="btn">
              <span class="to-do-text"></span> hit the gym
            </button>
            <button class="edit">
              <FiEdit />
            </button>
            <button class="delete">
              <FiTrash2 />
            </button>
          </div>
        </div>
        <div className="task">
          <div class="check">
            <span class="tick"></span>
          </div>
          <div class="btns">
            <button id="btn">
              <span class="to-do-text"></span> go shopping
            </button>
            <button class="edit">
              <FiEdit />
            </button>
            <button class="delete">
              <FiTrash2 />
            </button>
          </div>
        </div>
        <div className="task">
          <div class="check">
            <span class="tick"></span>
          </div>
          <div class="btns">
            <button id="btn">
              <span class="to-do-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt illum doloremque ab eveniet quod fugit enim quibusdam fuga temporibus vitae natus distinctio odio culpa itaque, suscipit saepe explicabo mollitia accusantium!</span> 
            </button>
            <button class="edit">
              <FiEdit />
            </button>
            <button class="delete">
              <FiTrash2 />
            </button>
          </div>
        </div>
      </div>
      <div className="accomplished-tasks">
          <div className="task">
          <div class="check">
            <span class="tick">
              <MdDone />
            </span>
          </div>
          <div class="btns">
            <button id="btn">
              <span class="to-do-text">hit the gym</span> 
            </button>
            <button class="edit">
              <FiEdit />
            </button>
            <button class="delete">
              <FiTrash2 />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
