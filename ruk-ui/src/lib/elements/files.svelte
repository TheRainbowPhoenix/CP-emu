<script lang="ts">
  import { createEventDispatcher, onDestroy, onMount } from "svelte";
  import Close from "../../assets/icons/close.svelte";
  import { filesPane } from "../stores/app";
  import SendFile from "../../assets/icons/sendFile.svelte";
  import NewFolder from "../../assets/icons/newFolder.svelte";
  import EmptyFolder from "../../assets/icons/emptyFolder.svelte";
  import Program from "../../assets/icons/program.svelte";
  import EmptyFile from "../../assets/icons/emptyFile.svelte";

  const dispatch = createEventDispatcher();

  let targetDir = '/fls0';

  interface FileNode {
    type: "file" | "dir"
    name: string
    size: number
    stats: any
  }
  let files_view: FileNode[] = []


  function listFilesAndFolders() {
    let files: FileNode[] = []
    try {
      const entries = window.Module.FS.readdir(targetDir);
      for (const entry of entries) {
        const fullPath = `${targetDir}/${entry}`;
        const stats = window.Module.FS.stat(fullPath);
        if (window.Module.FS.isFile(stats.mode)) {
          files.push({
            type: "file",
            name: entry,
            size: stats.size,
            stats: stats
          })
        } else if (window.Module.FS.isDir(stats.mode)) {
          files.push({
            type: "dir",
            name: entry,
            size: stats.size,
            stats: stats
          })
        }
        // You can also access other properties from 'stats' (e.g., size, modification time)
      }
    } catch (error) {
      console.error('Error reading directory:', error);
    }
    files_view = files;
  }
  const doSendFile = (e: Event) => {
    dispatch("doSendFile", e);
  };

  const doNewFolder = (e: Event) => {
    dispatch("doNewFolder", e);
  };

  const doClose = (e: Event) => {
    dispatch("doClose", e);
    // TODO: do this on main ?
    filesPane.set(false);
  };

  filesPane.subscribe((visible) => {
    if (window.Module && window.Module.FS) {
      listFilesAndFolders()
    }
  })

  onMount(async () => {
    if (window.Module && window.Module.FS) {
      listFilesAndFolders()
    }
  })

</script>

<div class="files-panel view-panel" class:visible={$filesPane}>
  <div class="titlebar">
    <h4 class="header">{targetDir}</h4>

    <button
      class="toolbar-action"
      type="button"
      title="Send file from computer"
      tabindex="0"
      on:click={doSendFile}
      id="btn_send_files"
    >
      <SendFile />
    </button>

    <button
      class="toolbar-action"
      type="button"
      title="New folder"
      tabindex="0"
      on:click={doNewFolder}
      id="btn_new_folder_files"
    >
      <NewFolder />
    </button>

    <button
      class="toolbar-action"
      type="button"
      title="close"
      tabindex="0"
      on:click={doClose}
      id="btn_close_trace"
    >
      <Close />
    </button>
  </div>
  <div class="contents">
    <div class="files">
      {#each files_view as file}
        <div class="file" title={file.name}>
          <div class="icon">
            {#if file.type === "dir"}
              <EmptyFolder />
            {:else if file.type === "file"}
              {#if file.name.endsWith(".bin")}
                <Program />
              {:else}
                <EmptyFile />
              {/if}
            {/if}
          </div>
          <p class="name">{file.name}</p>
        </div>
        
      {/each}
    </div>
  </div>
</div>

<style>
  .files-panel {
    max-width: 0px;
    max-height: 70px;
    visibility: hidden;
  }

  .files-panel.visible {
    min-width: 350px;
    max-width: 95vw;
    max-height: 95vh;
    visibility: visible;
  }

  .files-panel.visible .contents {
    overflow: auto;
    opacity: 1;
    animation: hide-scroll 0.5s backwards;
  }

  @keyframes hide-scroll {
    from,
    to {
      overflow: hidden;
    }
  }

  .files-panel .contents {
    overflow: hidden;
  }

  .files-panel.visible .contents {
    overflow: auto;
    opacity: 1;
  }

  .files {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    padding: 1.2rem 0.6rem;
    padding-top: 0;
  }

  .file {
    flex-direction: column;
    display: flex;
    overflow: hidden;
    align-items: center;
  }

  .file:hover .icon {
    background-color: #1c1c20;
  }

  .file .icon {
    background-color: #1c1c2000;
    display: inline-flex;
    block-size: 5rem;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    min-height: 4rem;
    border-radius: .25rem;
    aspect-ratio: 1;
    transition: background-color .25s ease-in;
  }

  .file .icon :global(svg) {
    width: 100%;
    height: 100%;
    max-width: 2rem;
    max-height: 2rem;
  }

  .file .name {
    flex: 1 1 45%;
    min-height: 3rem;
    width: 100%;
    max-height: 3rem;
    text-align: center;
    word-wrap: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    margin: .25rem 0;
  }

</style>
