import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from './components/ui/resizable'
import { Grid, HStack, Stack, VStack } from '../styled-system/jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'
import Typography from './components/ui/typography'
import { Skeleton } from './components/ui/skeleton'
import { useEffect, useState } from 'react'
import { css } from '../styled-system/css'

const stubData = [{
  title: ''
}]

function App(): JSX.Element {
  const [resolved, setResolved] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setResolved(true)
    }, 100000)
  }, [])

  const cardTitle = resolved ? (
    `Card Title`
  ) : (
    <Skeleton className="h-[1.5rem] w-[100px] rounded-full" />
  )

  const cardDescription = resolved ? (
    `Card Description`
  ) : (
    <Stack gap={2} direction="column">
      <Skeleton className="h-[1rem] w-[400px] rounded-full" />
      <Skeleton className="h-[1rem] w-[200px] rounded-full" />
    </Stack>
  )
  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel className="min-w-min p-4" defaultSize={0} maxSize={30}>
        <Typography variant="h2">hello</Typography>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel className="p-4" minSize={60} defaultSize={75}>
        <Grid gap={3}>
          <Card>
            <CardHeader>
              <CardTitle>{cardTitle}</CardTitle>
              <CardContent>{cardDescription}</CardContent>
            </CardHeader>
          </Card>
        </Grid>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}

export default App

// git@github.com:keojo-aroundcode/electron-1000-aroundcode.git
