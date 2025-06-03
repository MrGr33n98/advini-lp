# listar-estrutura.ps1
# Script de Varredura do Projeto advini-advocacia-next

# Caminho raiz do projeto
$root = Split-Path -Parent $MyInvocation.MyCommand.Definition
$output = Join-Path $root 'estrutura-projeto.md'

function Listar-Arvore($path, $prefix = "") {
    $items = Get-ChildItem -Path $path | Sort-Object -Property PSIsContainer, Name
    for ($i = 0; $i -lt $items.Count; $i++) {
        $item = $items[$i]
        $isLast = ($i -eq $items.Count - 1)
        $marker = if ($isLast) { "└── " } else { "├── " }
        $line = "$prefix$marker$item"
        Add-Content -Path $output -Value $line
        if ($item.PSIsContainer) {
            $newPrefix = $prefix + (if ($isLast) { "    " } else { "│   " })
            Listar-Arvore -path $item.FullName -prefix $newPrefix
        }
    }
}

"# Estrutura do Projeto advini-advocacia-next" | Set-Content -Path $output
Listar-Arvore (Join-Path $root 'advini-advocacia-next')
Write-Host "Arquivo de estrutura gerado em: $output"
